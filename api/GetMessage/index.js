module.exports = async function (context, req) {
  const date = "2024-04-22T07:09:22.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

