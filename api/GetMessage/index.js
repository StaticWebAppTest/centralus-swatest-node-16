module.exports = async function (context, req) {
  const date = "2022-07-17T12:18:26.629Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

