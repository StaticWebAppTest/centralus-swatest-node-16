module.exports = async function (context, req) {
  const date = "2024-02-26T03:10:28.174Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

