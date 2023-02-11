module.exports = async function (context, req) {
  const date = "2023-02-11T10:09:19.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

