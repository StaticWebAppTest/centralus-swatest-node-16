module.exports = async function (context, req) {
  const date = "2022-06-27T16:15:02.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

