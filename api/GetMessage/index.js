module.exports = async function (context, req) {
  const date = "2023-08-10T05:08:33.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

