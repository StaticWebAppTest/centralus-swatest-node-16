module.exports = async function (context, req) {
  const date = "2023-11-01T08:11:43.116Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

