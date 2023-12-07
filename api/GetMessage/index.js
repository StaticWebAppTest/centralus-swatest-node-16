module.exports = async function (context, req) {
  const date = "2023-12-07T00:43:40.117Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

