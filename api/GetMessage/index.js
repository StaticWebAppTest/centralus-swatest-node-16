module.exports = async function (context, req) {
  const date = "2022-03-05T07:10:00.494Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

