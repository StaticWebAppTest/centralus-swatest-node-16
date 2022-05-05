module.exports = async function (context, req) {
  const date = "2022-05-05T21:10:30.494Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

