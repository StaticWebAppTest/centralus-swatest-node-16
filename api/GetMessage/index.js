module.exports = async function (context, req) {
  const date = "2024-03-30T01:38:26.670Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

