module.exports = async function (context, req) {
  const date = "2025-01-12T15:10:32.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

