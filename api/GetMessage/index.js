module.exports = async function (context, req) {
  const date = "2023-10-19T05:08:28.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

