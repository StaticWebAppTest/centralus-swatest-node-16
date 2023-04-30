module.exports = async function (context, req) {
  const date = "2023-04-30T07:07:28.330Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

