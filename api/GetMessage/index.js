module.exports = async function (context, req) {
  const date = "2024-04-17T23:10:19.818Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

