module.exports = async function (context, req) {
  const date = "2023-03-21T00:48:21.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

