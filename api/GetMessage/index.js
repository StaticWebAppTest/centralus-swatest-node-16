module.exports = async function (context, req) {
  const date = "2022-04-09T12:16:19.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

