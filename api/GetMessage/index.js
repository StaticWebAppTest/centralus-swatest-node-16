module.exports = async function (context, req) {
  const date = "2022-10-01T09:16:20.638Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

