module.exports = async function (context, req) {
  const date = "2022-04-05T03:23:35.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

