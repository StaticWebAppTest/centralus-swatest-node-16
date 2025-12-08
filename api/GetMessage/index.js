module.exports = async function (context, req) {
  const date = "2025-12-08T17:14:52.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

