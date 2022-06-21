module.exports = async function (context, req) {
  const date = "2022-06-21T23:11:10.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

