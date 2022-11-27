module.exports = async function (context, req) {
  const date = "2022-11-27T10:10:01.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

