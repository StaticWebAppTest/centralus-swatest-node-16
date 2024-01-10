module.exports = async function (context, req) {
  const date = "2024-01-10T02:23:49.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

