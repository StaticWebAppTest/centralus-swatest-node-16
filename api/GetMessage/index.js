module.exports = async function (context, req) {
  const date = "2022-07-30T21:09:08.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

