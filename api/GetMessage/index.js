module.exports = async function (context, req) {
  const date = "2023-01-05T03:10:09.088Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

