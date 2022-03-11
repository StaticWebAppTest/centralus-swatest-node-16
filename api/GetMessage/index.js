module.exports = async function (context, req) {
  const date = "2022-03-11T13:16:01.164Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

