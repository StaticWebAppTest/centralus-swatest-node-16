module.exports = async function (context, req) {
  const date = "2024-10-06T20:11:35.563Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

