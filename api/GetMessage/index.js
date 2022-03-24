module.exports = async function (context, req) {
  const date = "2022-03-24T13:19:12.641Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

