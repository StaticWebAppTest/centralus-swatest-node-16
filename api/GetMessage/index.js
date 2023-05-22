module.exports = async function (context, req) {
  const date = "2023-05-22T10:09:47.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

