module.exports = async function (context, req) {
  const date = "2024-06-16T05:10:47.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

