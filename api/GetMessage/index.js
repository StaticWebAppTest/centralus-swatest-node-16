module.exports = async function (context, req) {
  const date = "2023-12-07T07:08:48.720Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

