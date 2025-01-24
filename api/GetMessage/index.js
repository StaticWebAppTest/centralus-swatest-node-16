module.exports = async function (context, req) {
  const date = "2025-01-24T19:09:06.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

