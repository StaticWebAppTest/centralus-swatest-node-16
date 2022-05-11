module.exports = async function (context, req) {
  const date = "2022-05-11T08:16:05.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

