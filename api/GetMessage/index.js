module.exports = async function (context, req) {
  const date = "2023-08-06T00:43:42.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

