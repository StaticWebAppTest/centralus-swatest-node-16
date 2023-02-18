module.exports = async function (context, req) {
  const date = "2023-02-18T15:08:51.720Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

