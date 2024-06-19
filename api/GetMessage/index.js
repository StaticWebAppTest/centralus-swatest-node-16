module.exports = async function (context, req) {
  const date = "2024-06-19T05:10:51.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

