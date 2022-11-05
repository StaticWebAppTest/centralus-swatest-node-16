module.exports = async function (context, req) {
  const date = "2022-11-05T11:09:00.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

