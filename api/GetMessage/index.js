module.exports = async function (context, req) {
  const date = "2022-11-25T12:21:00.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

