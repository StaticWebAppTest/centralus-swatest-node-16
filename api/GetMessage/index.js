module.exports = async function (context, req) {
  const date = "2023-01-24T23:09:07.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

