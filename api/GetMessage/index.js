module.exports = async function (context, req) {
  const date = "2023-06-19T22:11:13.205Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

