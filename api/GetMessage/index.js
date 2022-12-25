module.exports = async function (context, req) {
  const date = "2022-12-25T12:15:53.429Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

