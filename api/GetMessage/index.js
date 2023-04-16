module.exports = async function (context, req) {
  const date = "2023-04-16T03:09:19.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

