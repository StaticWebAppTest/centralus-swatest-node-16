module.exports = async function (context, req) {
  const date = "2026-02-22T09:23:54.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

