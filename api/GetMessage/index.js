module.exports = async function (context, req) {
  const date = "2022-12-19T13:16:08.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

