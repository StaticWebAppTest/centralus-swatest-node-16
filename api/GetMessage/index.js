module.exports = async function (context, req) {
  const date = "2023-04-25T18:11:04.408Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

