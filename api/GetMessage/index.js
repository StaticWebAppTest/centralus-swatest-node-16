module.exports = async function (context, req) {
  const date = "2024-12-16T05:13:23.428Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

