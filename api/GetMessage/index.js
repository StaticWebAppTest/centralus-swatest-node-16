module.exports = async function (context, req) {
  const date = "2024-02-18T21:07:17.490Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

