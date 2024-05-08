module.exports = async function (context, req) {
  const date = "2024-05-08T03:11:30.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

