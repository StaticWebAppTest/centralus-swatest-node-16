module.exports = async function (context, req) {
  const date = "2023-02-17T11:08:28.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

