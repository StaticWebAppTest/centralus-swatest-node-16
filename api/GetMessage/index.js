module.exports = async function (context, req) {
  const date = "2023-11-19T03:09:36.583Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

