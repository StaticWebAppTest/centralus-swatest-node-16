module.exports = async function (context, req) {
  const date = "2022-10-20T20:14:40.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

