module.exports = async function (context, req) {
  const date = "2024-04-20T10:09:15.083Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

