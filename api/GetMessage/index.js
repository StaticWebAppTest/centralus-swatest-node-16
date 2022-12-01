module.exports = async function (context, req) {
  const date = "2022-12-01T22:09:16.045Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

