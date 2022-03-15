module.exports = async function (context, req) {
  const date = "2022-03-15T02:11:22.764Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

