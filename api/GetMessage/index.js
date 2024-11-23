module.exports = async function (context, req) {
  const date = "2024-11-23T14:10:53.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

