module.exports = async function (context, req) {
  const date = "2025-08-25T06:22:15.588Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

