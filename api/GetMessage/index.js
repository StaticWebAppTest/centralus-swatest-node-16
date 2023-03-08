module.exports = async function (context, req) {
  const date = "2023-03-08T16:13:43.931Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

