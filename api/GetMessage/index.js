module.exports = async function (context, req) {
  const date = "2023-01-16T23:09:26.667Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

