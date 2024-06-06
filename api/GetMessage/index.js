module.exports = async function (context, req) {
  const date = "2024-06-06T05:10:54.984Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

