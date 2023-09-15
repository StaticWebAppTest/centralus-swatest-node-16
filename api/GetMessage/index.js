module.exports = async function (context, req) {
  const date = "2023-09-15T19:06:55.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

