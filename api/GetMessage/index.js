module.exports = async function (context, req) {
  const date = "2023-01-25T23:09:37.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

