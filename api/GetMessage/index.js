module.exports = async function (context, req) {
  const date = "2022-03-27T19:08:04.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

