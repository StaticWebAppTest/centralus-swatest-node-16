module.exports = async function (context, req) {
  const date = "2022-05-06T08:14:11.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

