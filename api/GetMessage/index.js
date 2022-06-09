module.exports = async function (context, req) {
  const date = "2022-06-09T21:08:56.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

