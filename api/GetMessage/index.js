module.exports = async function (context, req) {
  const date = "2023-03-04T03:11:41.619Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

