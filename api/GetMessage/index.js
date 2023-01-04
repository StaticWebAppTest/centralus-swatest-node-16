module.exports = async function (context, req) {
  const date = "2023-01-04T21:08:56.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

