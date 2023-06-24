module.exports = async function (context, req) {
  const date = "2023-06-24T19:07:33.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

