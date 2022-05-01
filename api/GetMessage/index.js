module.exports = async function (context, req) {
  const date = "2022-05-01T01:08:01.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

