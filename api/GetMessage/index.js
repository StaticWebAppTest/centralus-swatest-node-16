module.exports = async function (context, req) {
  const date = "2023-12-01T17:08:39.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

