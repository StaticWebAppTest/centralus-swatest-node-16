module.exports = async function (context, req) {
  const date = "2025-11-27T11:12:32.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

