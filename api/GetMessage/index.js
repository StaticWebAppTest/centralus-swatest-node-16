module.exports = async function (context, req) {
  const date = "2023-03-08T00:56:45.822Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

