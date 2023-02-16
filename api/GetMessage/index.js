module.exports = async function (context, req) {
  const date = "2023-02-16T03:13:39.450Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

