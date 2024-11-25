module.exports = async function (context, req) {
  const date = "2024-11-25T05:12:51.472Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

