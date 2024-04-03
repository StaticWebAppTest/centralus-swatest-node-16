module.exports = async function (context, req) {
  const date = "2024-04-03T15:09:11.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

