module.exports = async function (context, req) {
  const date = "2023-01-27T19:07:39.562Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

