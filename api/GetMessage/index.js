module.exports = async function (context, req) {
  const date = "2024-12-15T08:14:58.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

