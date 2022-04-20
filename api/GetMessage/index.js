module.exports = async function (context, req) {
  const date = "2022-04-20T13:30:08.601Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

