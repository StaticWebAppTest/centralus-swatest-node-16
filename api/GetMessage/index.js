module.exports = async function (context, req) {
  const date = "2022-04-25T12:22:59.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

