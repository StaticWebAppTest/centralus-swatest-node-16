module.exports = async function (context, req) {
  const date = "2023-06-26T08:17:25.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

