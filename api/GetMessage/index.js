module.exports = async function (context, req) {
  const date = "2022-05-10T12:27:19.003Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

