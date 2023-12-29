module.exports = async function (context, req) {
  const date = "2023-12-29T23:08:51.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

