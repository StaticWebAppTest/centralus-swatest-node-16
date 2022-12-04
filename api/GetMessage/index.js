module.exports = async function (context, req) {
  const date = "2022-12-04T22:08:31.764Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

