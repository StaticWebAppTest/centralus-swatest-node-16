module.exports = async function (context, req) {
  const date = "2024-03-01T16:10:42.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

