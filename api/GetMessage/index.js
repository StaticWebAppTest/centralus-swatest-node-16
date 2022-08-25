module.exports = async function (context, req) {
  const date = "2022-08-25T21:10:28.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

