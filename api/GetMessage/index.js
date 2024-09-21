module.exports = async function (context, req) {
  const date = "2024-09-21T16:13:54.507Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

