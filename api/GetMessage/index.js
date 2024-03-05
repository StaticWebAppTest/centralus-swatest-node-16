module.exports = async function (context, req) {
  const date = "2024-03-05T04:11:40.709Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

