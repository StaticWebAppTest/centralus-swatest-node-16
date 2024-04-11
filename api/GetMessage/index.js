module.exports = async function (context, req) {
  const date = "2024-04-11T00:42:32.998Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

