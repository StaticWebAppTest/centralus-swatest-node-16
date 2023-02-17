module.exports = async function (context, req) {
  const date = "2023-02-17T16:12:47.534Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

