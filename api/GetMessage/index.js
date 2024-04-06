module.exports = async function (context, req) {
  const date = "2024-04-06T19:06:50.227Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

