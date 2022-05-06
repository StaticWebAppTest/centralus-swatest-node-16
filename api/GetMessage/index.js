module.exports = async function (context, req) {
  const date = "2022-05-06T04:14:25.649Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

