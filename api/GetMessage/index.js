module.exports = async function (context, req) {
  const date = "2024-05-30T01:54:53.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

