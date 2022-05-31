module.exports = async function (context, req) {
  const date = "2022-05-31T13:34:47.999Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

