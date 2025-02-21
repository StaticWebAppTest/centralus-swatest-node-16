module.exports = async function (context, req) {
  const date = "2025-02-21T17:10:27.776Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

