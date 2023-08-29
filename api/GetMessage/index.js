module.exports = async function (context, req) {
  const date = "2023-08-29T05:08:24.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

