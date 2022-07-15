module.exports = async function (context, req) {
  const date = "2022-07-15T01:07:13.647Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

