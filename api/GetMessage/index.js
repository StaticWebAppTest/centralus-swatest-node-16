module.exports = async function (context, req) {
  const date = "2023-10-11T02:16:11.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

