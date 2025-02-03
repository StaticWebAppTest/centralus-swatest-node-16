module.exports = async function (context, req) {
  const date = "2025-02-03T22:10:50.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

