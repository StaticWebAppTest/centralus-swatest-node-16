module.exports = async function (context, req) {
  const date = "2024-01-23T22:08:56.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

