module.exports = async function (context, req) {
  const date = "2024-06-16T07:10:43.259Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

