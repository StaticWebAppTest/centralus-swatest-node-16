module.exports = async function (context, req) {
  const date = "2022-10-01T14:14:26.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

