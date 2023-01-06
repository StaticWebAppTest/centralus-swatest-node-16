module.exports = async function (context, req) {
  const date = "2023-01-06T00:51:46.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

