module.exports = async function (context, req) {
  const date = "2023-08-22T16:10:37.619Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

