module.exports = async function (context, req) {
  const date = "2023-09-15T15:08:41.085Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

