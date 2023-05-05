module.exports = async function (context, req) {
  const date = "2023-05-05T07:08:11.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

