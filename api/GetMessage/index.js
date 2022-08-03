module.exports = async function (context, req) {
  const date = "2022-08-03T18:13:52.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

