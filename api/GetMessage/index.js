module.exports = async function (context, req) {
  const date = "2024-05-01T03:11:09.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

