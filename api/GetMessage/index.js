module.exports = async function (context, req) {
  const date = "2022-03-18T08:12:20.494Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

