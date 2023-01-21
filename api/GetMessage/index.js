module.exports = async function (context, req) {
  const date = "2023-01-21T22:08:14.809Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

