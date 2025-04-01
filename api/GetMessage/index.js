module.exports = async function (context, req) {
  const date = "2025-04-01T14:12:50.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

