module.exports = async function (context, req) {
  const date = "2023-07-25T05:08:28.460Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

