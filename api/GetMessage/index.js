module.exports = async function (context, req) {
  const date = "2023-01-10T03:11:19.916Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

