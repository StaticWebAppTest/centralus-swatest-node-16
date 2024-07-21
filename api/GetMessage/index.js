module.exports = async function (context, req) {
  const date = "2024-07-21T05:11:38.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

