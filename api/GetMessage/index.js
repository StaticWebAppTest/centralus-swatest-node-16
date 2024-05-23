module.exports = async function (context, req) {
  const date = "2024-05-23T11:10:05.714Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

