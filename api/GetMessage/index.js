module.exports = async function (context, req) {
  const date = "2022-10-15T19:12:12.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

