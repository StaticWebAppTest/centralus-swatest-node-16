module.exports = async function (context, req) {
  const date = "2023-08-04T14:08:02.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

