module.exports = async function (context, req) {
  const date = "2023-03-08T04:12:08.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

