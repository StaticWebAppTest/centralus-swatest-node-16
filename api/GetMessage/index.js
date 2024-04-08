module.exports = async function (context, req) {
  const date = "2024-04-08T15:09:06.164Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

