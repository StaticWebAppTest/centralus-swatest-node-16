module.exports = async function (context, req) {
  const date = "2025-01-24T13:17:07.588Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

