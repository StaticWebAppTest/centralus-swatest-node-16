module.exports = async function (context, req) {
  const date = "2022-09-06T23:12:20.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

