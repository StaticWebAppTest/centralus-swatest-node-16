module.exports = async function (context, req) {
  const date = "2023-05-01T22:08:15.767Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

