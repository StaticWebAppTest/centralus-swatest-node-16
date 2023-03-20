module.exports = async function (context, req) {
  const date = "2023-03-20T05:09:39.321Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

