module.exports = async function (context, req) {
  const date = "2022-12-20T17:08:40.218Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

