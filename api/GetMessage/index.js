module.exports = async function (context, req) {
  const date = "2023-10-01T15:07:48.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

