module.exports = async function (context, req) {
  const date = "2023-11-13T09:09:49.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

