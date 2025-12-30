module.exports = async function (context, req) {
  const date = "2025-12-30T12:30:52.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

