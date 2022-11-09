module.exports = async function (context, req) {
  const date = "2022-11-09T12:27:21.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

