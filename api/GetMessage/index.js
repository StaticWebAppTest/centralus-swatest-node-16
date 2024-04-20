module.exports = async function (context, req) {
  const date = "2024-04-20T11:07:05.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

