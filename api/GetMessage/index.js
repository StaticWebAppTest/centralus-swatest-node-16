module.exports = async function (context, req) {
  const date = "2025-11-23T19:10:20.066Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

