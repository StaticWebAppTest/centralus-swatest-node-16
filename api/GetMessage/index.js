module.exports = async function (context, req) {
  const date = "2022-08-18T13:36:05.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

