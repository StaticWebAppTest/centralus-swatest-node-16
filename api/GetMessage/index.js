module.exports = async function (context, req) {
  const date = "2024-03-17T09:08:02.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

