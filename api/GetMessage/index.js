module.exports = async function (context, req) {
  const date = "2023-05-20T02:30:02.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

