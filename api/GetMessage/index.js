module.exports = async function (context, req) {
  const date = "2022-06-24T17:16:09.218Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

