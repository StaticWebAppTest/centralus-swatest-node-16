module.exports = async function (context, req) {
  const date = "2023-06-07T16:11:34.514Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

