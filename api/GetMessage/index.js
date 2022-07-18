module.exports = async function (context, req) {
  const date = "2022-07-18T16:16:30.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

