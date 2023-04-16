module.exports = async function (context, req) {
  const date = "2023-04-16T22:07:53.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

