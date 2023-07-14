module.exports = async function (context, req) {
  const date = "2023-07-14T11:08:28.647Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

