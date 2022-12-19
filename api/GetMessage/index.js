module.exports = async function (context, req) {
  const date = "2022-12-19T02:04:00.945Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

