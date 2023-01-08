module.exports = async function (context, req) {
  const date = "2023-01-08T02:16:54.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

