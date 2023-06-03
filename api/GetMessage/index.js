module.exports = async function (context, req) {
  const date = "2023-06-03T00:54:23.720Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

