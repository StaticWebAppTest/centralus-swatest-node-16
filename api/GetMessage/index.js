module.exports = async function (context, req) {
  const date = "2023-11-20T01:52:48.507Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

