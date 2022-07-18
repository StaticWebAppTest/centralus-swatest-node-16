module.exports = async function (context, req) {
  const date = "2022-07-18T10:12:56.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

