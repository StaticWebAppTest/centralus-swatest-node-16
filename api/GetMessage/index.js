module.exports = async function (context, req) {
  const date = "2024-05-21T20:11:06.241Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

