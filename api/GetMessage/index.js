module.exports = async function (context, req) {
  const date = "2022-10-15T10:12:54.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

