module.exports = async function (context, req) {
  const date = "2023-05-24T23:08:47.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

