module.exports = async function (context, req) {
  const date = "2022-08-11T13:35:01.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

