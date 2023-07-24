module.exports = async function (context, req) {
  const date = "2023-07-24T10:09:36.075Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

