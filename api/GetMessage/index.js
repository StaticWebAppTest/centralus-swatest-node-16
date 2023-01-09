module.exports = async function (context, req) {
  const date = "2023-01-09T23:09:36.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

