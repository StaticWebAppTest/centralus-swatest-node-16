module.exports = async function (context, req) {
  const date = "2022-04-27T12:19:32.562Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

