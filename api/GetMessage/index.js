module.exports = async function (context, req) {
  const date = "2024-03-12T16:11:55.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

