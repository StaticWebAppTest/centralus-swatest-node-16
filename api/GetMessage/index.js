module.exports = async function (context, req) {
  const date = "2022-03-19T13:14:30.819Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

