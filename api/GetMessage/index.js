module.exports = async function (context, req) {
  const date = "2023-07-15T10:09:28.957Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

