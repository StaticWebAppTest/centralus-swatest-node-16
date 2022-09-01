module.exports = async function (context, req) {
  const date = "2022-09-01T18:15:16.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

