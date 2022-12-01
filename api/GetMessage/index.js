module.exports = async function (context, req) {
  const date = "2022-12-01T11:09:00.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

