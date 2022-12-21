module.exports = async function (context, req) {
  const date = "2022-12-21T07:08:49.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

