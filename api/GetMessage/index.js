module.exports = async function (context, req) {
  const date = "2023-07-18T02:55:24.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

