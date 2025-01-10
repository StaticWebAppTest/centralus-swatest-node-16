module.exports = async function (context, req) {
  const date = "2025-01-10T23:11:07.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

