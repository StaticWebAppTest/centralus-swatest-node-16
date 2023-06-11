module.exports = async function (context, req) {
  const date = "2023-06-11T19:06:34.745Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

