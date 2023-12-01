module.exports = async function (context, req) {
  const date = "2023-12-01T04:11:47.010Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

