module.exports = async function (context, req) {
  const date = "2022-09-25T12:22:12.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

