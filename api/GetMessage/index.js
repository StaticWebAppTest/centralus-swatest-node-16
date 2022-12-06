module.exports = async function (context, req) {
  const date = "2022-12-06T12:19:35.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

