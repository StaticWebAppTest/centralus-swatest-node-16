module.exports = async function (context, req) {
  const date = "2023-12-30T00:41:48.734Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

