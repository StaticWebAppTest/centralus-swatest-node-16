module.exports = async function (context, req) {
  const date = "2024-07-22T14:10:33.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

