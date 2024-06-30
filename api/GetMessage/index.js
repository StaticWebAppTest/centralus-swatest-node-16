module.exports = async function (context, req) {
  const date = "2024-06-30T04:12:02.847Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

