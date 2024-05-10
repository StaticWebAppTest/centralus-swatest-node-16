module.exports = async function (context, req) {
  const date = "2024-05-10T04:11:28.646Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

