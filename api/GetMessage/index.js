module.exports = async function (context, req) {
  const date = "2022-11-11T12:25:45.152Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

