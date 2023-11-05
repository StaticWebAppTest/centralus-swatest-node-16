module.exports = async function (context, req) {
  const date = "2023-11-05T10:08:27.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

