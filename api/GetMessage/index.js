module.exports = async function (context, req) {
  const date = "2023-07-21T00:52:50.819Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

