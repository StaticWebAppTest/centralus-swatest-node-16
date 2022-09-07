module.exports = async function (context, req) {
  const date = "2022-09-07T14:20:48.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

