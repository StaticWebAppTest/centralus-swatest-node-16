module.exports = async function (context, req) {
  const date = "2024-05-20T08:13:19.720Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

