module.exports = async function (context, req) {
  const date = "2024-07-11T05:10:35.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

