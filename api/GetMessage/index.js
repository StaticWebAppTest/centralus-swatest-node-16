module.exports = async function (context, req) {
  const date = "2022-04-12T02:36:08.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

