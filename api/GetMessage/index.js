module.exports = async function (context, req) {
  const date = "2025-05-23T19:10:23.893Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

