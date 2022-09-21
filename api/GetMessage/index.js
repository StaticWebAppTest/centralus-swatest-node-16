module.exports = async function (context, req) {
  const date = "2022-09-21T21:12:35.604Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

