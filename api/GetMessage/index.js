module.exports = async function (context, req) {
  const date = "2023-01-12T17:22:05.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

