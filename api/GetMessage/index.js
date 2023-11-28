module.exports = async function (context, req) {
  const date = "2023-11-28T05:09:18.846Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

