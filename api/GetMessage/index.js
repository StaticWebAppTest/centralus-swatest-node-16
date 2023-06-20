module.exports = async function (context, req) {
  const date = "2023-06-20T17:08:01.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

