module.exports = async function (context, req) {
  const date = "2023-02-18T07:08:31.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

