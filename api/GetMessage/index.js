module.exports = async function (context, req) {
  const date = "2024-01-19T05:09:24.215Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

