module.exports = async function (context, req) {
  const date = "2022-05-30T05:21:04.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

