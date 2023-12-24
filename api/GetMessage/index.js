module.exports = async function (context, req) {
  const date = "2023-12-24T10:08:48.274Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

