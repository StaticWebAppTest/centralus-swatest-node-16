module.exports = async function (context, req) {
  const date = "2025-08-27T19:10:50.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

