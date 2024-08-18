module.exports = async function (context, req) {
  const date = "2024-08-18T07:08:49.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

