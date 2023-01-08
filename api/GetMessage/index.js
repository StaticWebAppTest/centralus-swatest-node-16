module.exports = async function (context, req) {
  const date = "2023-01-08T22:08:21.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

