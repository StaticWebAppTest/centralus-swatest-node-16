module.exports = async function (context, req) {
  const date = "2024-09-09T13:19:58.322Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

