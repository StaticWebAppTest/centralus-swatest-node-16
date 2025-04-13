module.exports = async function (context, req) {
  const date = "2025-04-13T02:30:54.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

