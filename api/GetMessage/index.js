module.exports = async function (context, req) {
  const date = "2025-02-12T07:11:14.490Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

