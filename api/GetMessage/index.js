module.exports = async function (context, req) {
  const date = "2024-03-30T00:40:09.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

