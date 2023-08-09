module.exports = async function (context, req) {
  const date = "2023-08-09T10:09:47.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

