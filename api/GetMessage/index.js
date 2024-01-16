module.exports = async function (context, req) {
  const date = "2024-01-16T23:09:26.073Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

