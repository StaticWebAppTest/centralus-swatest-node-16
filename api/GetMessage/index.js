module.exports = async function (context, req) {
  const date = "2023-05-19T00:49:19.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

