module.exports = async function (context, req) {
  const date = "2024-12-30T05:12:05.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

