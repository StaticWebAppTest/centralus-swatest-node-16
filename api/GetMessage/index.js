module.exports = async function (context, req) {
  const date = "2023-04-22T00:47:07.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

