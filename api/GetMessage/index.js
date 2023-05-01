module.exports = async function (context, req) {
  const date = "2023-05-01T11:07:20.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

