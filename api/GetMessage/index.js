module.exports = async function (context, req) {
  const date = "2022-04-13T13:21:56.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

