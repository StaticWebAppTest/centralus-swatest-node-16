module.exports = async function (context, req) {
  const date = "2023-09-22T16:11:11.931Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

