module.exports = async function (context, req) {
  const date = "2024-10-05T22:11:09.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

