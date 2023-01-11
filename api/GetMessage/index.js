module.exports = async function (context, req) {
  const date = "2023-01-11T00:51:09.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

