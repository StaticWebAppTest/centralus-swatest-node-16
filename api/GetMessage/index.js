module.exports = async function (context, req) {
  const date = "2024-08-06T19:08:27.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

