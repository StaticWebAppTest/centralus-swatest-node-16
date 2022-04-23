module.exports = async function (context, req) {
  const date = "2022-04-23T02:28:43.456Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

