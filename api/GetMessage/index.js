module.exports = async function (context, req) {
  const date = "2022-08-15T01:02:01.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

