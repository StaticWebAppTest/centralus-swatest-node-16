module.exports = async function (context, req) {
  const date = "2025-04-25T17:11:20.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

