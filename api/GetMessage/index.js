module.exports = async function (context, req) {
  const date = "2023-01-14T22:08:15.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

