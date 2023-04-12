module.exports = async function (context, req) {
  const date = "2023-04-12T00:45:26.391Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

