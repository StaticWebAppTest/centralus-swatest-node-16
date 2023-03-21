module.exports = async function (context, req) {
  const date = "2023-03-21T08:12:29.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

