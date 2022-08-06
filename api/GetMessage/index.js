module.exports = async function (context, req) {
  const date = "2022-08-06T18:12:48.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

