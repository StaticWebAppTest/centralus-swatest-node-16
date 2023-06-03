module.exports = async function (context, req) {
  const date = "2023-06-03T19:08:09.509Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

