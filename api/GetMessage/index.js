module.exports = async function (context, req) {
  const date = "2022-04-04T17:15:46.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

