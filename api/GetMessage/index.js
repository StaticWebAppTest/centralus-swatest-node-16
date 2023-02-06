module.exports = async function (context, req) {
  const date = "2023-02-06T20:10:28.851Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

