module.exports = async function (context, req) {
  const date = "2022-03-25T12:37:14.029Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

