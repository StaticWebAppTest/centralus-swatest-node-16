module.exports = async function (context, req) {
  const date = "2024-12-26T17:09:48.723Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

