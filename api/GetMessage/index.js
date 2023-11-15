module.exports = async function (context, req) {
  const date = "2023-11-15T19:07:26.514Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

