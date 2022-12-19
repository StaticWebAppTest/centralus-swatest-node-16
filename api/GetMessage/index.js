module.exports = async function (context, req) {
  const date = "2022-12-19T10:11:38.453Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

