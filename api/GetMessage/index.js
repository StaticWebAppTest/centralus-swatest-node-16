module.exports = async function (context, req) {
  const date = "2023-02-12T12:16:56.490Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

