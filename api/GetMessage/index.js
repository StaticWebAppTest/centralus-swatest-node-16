module.exports = async function (context, req) {
  const date = "2023-07-20T23:08:35.507Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

