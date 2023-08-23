module.exports = async function (context, req) {
  const date = "2023-08-23T07:07:48.851Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

