module.exports = async function (context, req) {
  const date = "2025-03-23T23:10:53.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

