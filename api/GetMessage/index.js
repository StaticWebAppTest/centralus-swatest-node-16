module.exports = async function (context, req) {
  const date = "2022-07-29T04:41:57.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

