module.exports = async function (context, req) {
  const date = "2022-05-24T12:22:40.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

