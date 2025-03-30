module.exports = async function (context, req) {
  const date = "2025-03-30T15:11:54.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

