module.exports = async function (context, req) {
  const date = "2023-07-07T17:08:51.743Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

