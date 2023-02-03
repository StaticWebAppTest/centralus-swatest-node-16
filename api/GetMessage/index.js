module.exports = async function (context, req) {
  const date = "2023-02-03T20:10:15.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

