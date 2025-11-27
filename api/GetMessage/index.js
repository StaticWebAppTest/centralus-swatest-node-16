module.exports = async function (context, req) {
  const date = "2025-11-27T19:10:47.437Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

