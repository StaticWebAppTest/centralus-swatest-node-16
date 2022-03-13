module.exports = async function (context, req) {
  const date = "2022-03-13T13:14:00.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

