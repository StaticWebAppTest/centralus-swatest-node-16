module.exports = async function (context, req) {
  const date = "2023-10-16T20:10:01.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

