module.exports = async function (context, req) {
  const date = "2024-05-05T14:08:32.619Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

