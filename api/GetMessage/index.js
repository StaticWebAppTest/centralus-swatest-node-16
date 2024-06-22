module.exports = async function (context, req) {
  const date = "2024-06-22T07:10:44.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

