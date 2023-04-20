module.exports = async function (context, req) {
  const date = "2023-04-20T22:08:11.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

