module.exports = async function (context, req) {
  const date = "2022-02-24T23:10:29.320Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

