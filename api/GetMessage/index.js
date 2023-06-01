module.exports = async function (context, req) {
  const date = "2023-06-01T17:07:39.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

