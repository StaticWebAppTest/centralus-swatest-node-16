module.exports = async function (context, req) {
  const date = "2025-12-17T15:16:30.058Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

