module.exports = async function (context, req) {
  const date = "2023-04-03T19:06:53.989Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

