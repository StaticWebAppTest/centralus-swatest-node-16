module.exports = async function (context, req) {
  const date = "2025-04-24T17:11:45.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

