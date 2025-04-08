module.exports = async function (context, req) {
  const date = "2025-04-08T08:18:00.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

