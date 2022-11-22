module.exports = async function (context, req) {
  const date = "2022-11-22T11:09:07.218Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

