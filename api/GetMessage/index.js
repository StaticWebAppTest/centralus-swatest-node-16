module.exports = async function (context, req) {
  const date = "2025-12-21T09:13:45.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

