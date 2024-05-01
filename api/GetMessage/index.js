module.exports = async function (context, req) {
  const date = "2024-05-01T05:09:20.818Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

