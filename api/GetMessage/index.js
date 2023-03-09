module.exports = async function (context, req) {
  const date = "2023-03-09T00:56:19.507Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

