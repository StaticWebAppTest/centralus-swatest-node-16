module.exports = async function (context, req) {
  const date = "2022-07-13T12:19:42.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

