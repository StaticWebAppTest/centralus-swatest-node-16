module.exports = async function (context, req) {
  const date = "2023-09-20T19:07:00.989Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

