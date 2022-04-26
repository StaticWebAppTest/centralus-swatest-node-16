module.exports = async function (context, req) {
  const date = "2022-04-26T12:23:06.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

