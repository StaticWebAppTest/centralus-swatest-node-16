module.exports = async function (context, req) {
  const date = "2024-05-17T10:10:07.541Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

