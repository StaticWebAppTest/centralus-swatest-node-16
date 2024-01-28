module.exports = async function (context, req) {
  const date = "2024-01-28T05:09:28.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

