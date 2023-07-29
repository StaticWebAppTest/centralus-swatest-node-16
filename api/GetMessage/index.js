module.exports = async function (context, req) {
  const date = "2023-07-29T13:08:32.006Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

