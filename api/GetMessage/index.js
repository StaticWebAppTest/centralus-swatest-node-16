module.exports = async function (context, req) {
  const date = "2025-12-04T09:17:42.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

