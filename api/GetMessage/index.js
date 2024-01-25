module.exports = async function (context, req) {
  const date = "2024-01-25T03:10:06.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

