module.exports = async function (context, req) {
  const date = "2024-11-30T06:16:09.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

