module.exports = async function (context, req) {
  const date = "2022-07-19T11:09:00.204Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

