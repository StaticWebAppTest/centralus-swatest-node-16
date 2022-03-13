module.exports = async function (context, req) {
  const date = "2022-03-13T09:09:29.764Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

