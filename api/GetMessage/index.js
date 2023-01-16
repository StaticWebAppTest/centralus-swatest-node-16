module.exports = async function (context, req) {
  const date = "2023-01-16T19:07:45.261Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

