module.exports = async function (context, req) {
  const date = "2025-09-28T15:10:26.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

