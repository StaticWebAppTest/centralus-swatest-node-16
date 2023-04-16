module.exports = async function (context, req) {
  const date = "2023-04-16T07:07:39.344Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

