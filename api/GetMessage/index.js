module.exports = async function (context, req) {
  const date = "2023-05-16T05:08:32.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

