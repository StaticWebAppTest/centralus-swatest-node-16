module.exports = async function (context, req) {
  const date = "2022-04-11T10:12:43.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

