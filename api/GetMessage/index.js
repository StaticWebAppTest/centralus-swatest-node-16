module.exports = async function (context, req) {
  const date = "2024-07-28T10:09:53.151Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

