module.exports = async function (context, req) {
  const date = "2024-05-10T02:26:37.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

