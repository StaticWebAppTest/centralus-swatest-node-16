module.exports = async function (context, req) {
  const date = "2023-07-13T08:12:59.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

