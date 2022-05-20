module.exports = async function (context, req) {
  const date = "2022-05-20T12:21:37.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

