module.exports = async function (context, req) {
  const date = "2023-12-21T07:08:49.646Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

