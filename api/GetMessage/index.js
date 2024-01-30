module.exports = async function (context, req) {
  const date = "2024-01-30T16:11:16.497Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

