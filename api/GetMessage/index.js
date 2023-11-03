module.exports = async function (context, req) {
  const date = "2023-11-03T03:09:24.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

