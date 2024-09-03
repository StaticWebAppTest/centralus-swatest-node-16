module.exports = async function (context, req) {
  const date = "2024-09-03T21:10:05.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

