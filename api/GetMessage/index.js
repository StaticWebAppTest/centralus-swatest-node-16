module.exports = async function (context, req) {
  const date = "2022-03-06T11:07:53.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

