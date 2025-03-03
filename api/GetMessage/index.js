module.exports = async function (context, req) {
  const date = "2025-03-03T11:10:34.547Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

