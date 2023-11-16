module.exports = async function (context, req) {
  const date = "2023-11-16T03:09:51.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

