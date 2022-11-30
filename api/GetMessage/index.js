module.exports = async function (context, req) {
  const date = "2022-11-30T08:13:52.218Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

