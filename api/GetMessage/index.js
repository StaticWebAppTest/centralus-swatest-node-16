module.exports = async function (context, req) {
  const date = "2023-04-29T23:08:14.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

