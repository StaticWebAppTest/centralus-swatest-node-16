module.exports = async function (context, req) {
  const date = "2023-11-29T19:07:33.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

