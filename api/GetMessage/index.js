module.exports = async function (context, req) {
  const date = "2023-11-30T14:08:49.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

