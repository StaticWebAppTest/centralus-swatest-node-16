module.exports = async function (context, req) {
  const date = "2023-06-07T17:07:26.460Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

