module.exports = async function (context, req) {
  const date = "2023-09-24T13:08:37.075Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

