module.exports = async function (context, req) {
  const date = "2023-09-09T00:38:37.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

