module.exports = async function (context, req) {
  const date = "2025-04-16T11:11:05.932Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

