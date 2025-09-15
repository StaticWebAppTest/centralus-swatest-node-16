module.exports = async function (context, req) {
  const date = "2025-09-15T18:18:37.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

