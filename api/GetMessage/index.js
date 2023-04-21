module.exports = async function (context, req) {
  const date = "2023-04-21T00:46:10.417Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

