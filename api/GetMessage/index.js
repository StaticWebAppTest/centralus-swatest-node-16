module.exports = async function (context, req) {
  const date = "2023-06-10T15:07:58.647Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

