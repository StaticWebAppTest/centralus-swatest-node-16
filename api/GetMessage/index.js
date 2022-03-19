module.exports = async function (context, req) {
  const date = "2022-03-19T21:08:20.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

