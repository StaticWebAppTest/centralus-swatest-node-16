module.exports = async function (context, req) {
  const date = "2024-11-22T05:12:09.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

