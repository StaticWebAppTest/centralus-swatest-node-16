module.exports = async function (context, req) {
  const date = "2025-01-10T15:10:57.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

