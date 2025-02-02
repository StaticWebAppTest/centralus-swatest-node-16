module.exports = async function (context, req) {
  const date = "2025-02-02T21:09:23.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

