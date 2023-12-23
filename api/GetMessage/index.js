module.exports = async function (context, req) {
  const date = "2023-12-23T19:06:44.272Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

