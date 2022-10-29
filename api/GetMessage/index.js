module.exports = async function (context, req) {
  const date = "2022-10-29T06:14:47.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

