module.exports = async function (context, req) {
  const date = "2024-04-22T14:09:06.460Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

