module.exports = async function (context, req) {
  const date = "2023-07-22T02:01:23.619Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

