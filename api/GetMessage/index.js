module.exports = async function (context, req) {
  const date = "2022-12-05T10:11:09.765Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

