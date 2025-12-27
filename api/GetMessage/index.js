module.exports = async function (context, req) {
  const date = "2025-12-27T12:27:15.437Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

