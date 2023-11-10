module.exports = async function (context, req) {
  const date = "2023-11-10T22:08:05.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

