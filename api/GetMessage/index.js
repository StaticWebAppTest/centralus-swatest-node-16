module.exports = async function (context, req) {
  const date = "2023-10-23T05:08:51.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

