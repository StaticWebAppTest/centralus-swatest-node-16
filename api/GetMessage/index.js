module.exports = async function (context, req) {
  const date = "2024-07-22T22:10:06.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

