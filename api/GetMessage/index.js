module.exports = async function (context, req) {
  const date = "2023-11-05T19:06:51.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

