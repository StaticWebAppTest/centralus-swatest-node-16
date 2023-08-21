module.exports = async function (context, req) {
  const date = "2023-08-21T00:39:02.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

