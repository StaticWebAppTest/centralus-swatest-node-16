module.exports = async function (context, req) {
  const date = "2023-06-20T00:52:10.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

