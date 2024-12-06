module.exports = async function (context, req) {
  const date = "2024-12-06T18:17:16.436Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

