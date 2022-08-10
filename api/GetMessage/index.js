module.exports = async function (context, req) {
  const date = "2022-08-10T12:20:05.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

