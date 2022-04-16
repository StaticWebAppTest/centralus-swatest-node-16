module.exports = async function (context, req) {
  const date = "2022-04-16T00:48:25.127Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

