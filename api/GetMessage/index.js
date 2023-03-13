module.exports = async function (context, req) {
  const date = "2023-03-13T02:09:47.619Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

