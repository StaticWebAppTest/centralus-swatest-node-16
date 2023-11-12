module.exports = async function (context, req) {
  const date = "2023-11-12T19:06:39.931Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

