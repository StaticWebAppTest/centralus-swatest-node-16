module.exports = async function (context, req) {
  const date = "2025-05-23T21:10:39.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

