module.exports = async function (context, req) {
  const date = "2024-06-16T22:10:38.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

