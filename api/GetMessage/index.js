module.exports = async function (context, req) {
  const date = "2022-12-25T10:08:59.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

