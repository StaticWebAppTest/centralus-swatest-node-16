module.exports = async function (context, req) {
  const date = "2022-05-06T19:09:05.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

