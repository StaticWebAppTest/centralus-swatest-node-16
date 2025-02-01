module.exports = async function (context, req) {
  const date = "2025-02-01T07:10:48.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

