module.exports = async function (context, req) {
  const date = "2025-04-17T17:11:21.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

