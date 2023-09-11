module.exports = async function (context, req) {
  const date = "2023-09-11T11:07:29.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

