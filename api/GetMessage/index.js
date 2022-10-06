module.exports = async function (context, req) {
  const date = "2022-10-06T12:27:05.649Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

