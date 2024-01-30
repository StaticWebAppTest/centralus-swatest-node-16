module.exports = async function (context, req) {
  const date = "2024-01-30T10:10:33.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

