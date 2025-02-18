module.exports = async function (context, req) {
  const date = "2025-02-18T21:10:54.354Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

