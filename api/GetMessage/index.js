module.exports = async function (context, req) {
  const date = "2022-07-09T11:08:30.819Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

