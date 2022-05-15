module.exports = async function (context, req) {
  const date = "2022-05-15T12:20:06.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

