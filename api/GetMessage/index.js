module.exports = async function (context, req) {
  const date = "2026-08-10T18:45:32.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

