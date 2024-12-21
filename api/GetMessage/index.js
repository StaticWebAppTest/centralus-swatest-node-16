module.exports = async function (context, req) {
  const date = "2024-12-21T07:09:49.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

