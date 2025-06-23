module.exports = async function (context, req) {
  const date = "2025-06-23T09:17:08.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

