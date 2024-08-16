module.exports = async function (context, req) {
  const date = "2024-08-16T17:09:34.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

