module.exports = async function (context, req) {
  const date = "2025-02-15T15:11:18.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

