module.exports = async function (context, req) {
  const date = "2023-12-22T16:11:09.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

