module.exports = async function (context, req) {
  const date = "2023-03-19T10:09:22.720Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

