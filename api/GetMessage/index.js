module.exports = async function (context, req) {
  const date = "2025-03-16T14:10:02.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

