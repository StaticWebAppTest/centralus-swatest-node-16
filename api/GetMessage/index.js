module.exports = async function (context, req) {
  const date = "2023-11-05T11:06:43.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

