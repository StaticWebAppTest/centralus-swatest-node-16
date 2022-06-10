module.exports = async function (context, req) {
  const date = "2022-06-10T12:20:59.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

