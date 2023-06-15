module.exports = async function (context, req) {
  const date = "2023-06-15T19:07:12.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

