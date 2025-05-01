module.exports = async function (context, req) {
  const date = "2025-05-01T08:17:45.831Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

