module.exports = async function (context, req) {
  const date = "2022-05-27T19:08:59.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

