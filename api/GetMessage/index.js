module.exports = async function (context, req) {
  const date = "2022-05-07T18:12:14.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

