module.exports = async function (context, req) {
  const date = "2022-03-01T11:08:54.934Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

