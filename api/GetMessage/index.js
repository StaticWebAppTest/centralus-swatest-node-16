module.exports = async function (context, req) {
  const date = "2023-05-16T22:08:14.619Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

