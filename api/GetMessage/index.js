module.exports = async function (context, req) {
  const date = "2024-08-24T11:08:20.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

