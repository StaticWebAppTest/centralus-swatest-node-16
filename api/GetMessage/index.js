module.exports = async function (context, req) {
  const date = "2025-05-04T21:11:19.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

