module.exports = async function (context, req) {
  const date = "2022-09-15T01:12:19.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

