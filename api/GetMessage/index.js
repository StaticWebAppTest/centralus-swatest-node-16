module.exports = async function (context, req) {
  const date = "2025-01-24T18:15:45.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

