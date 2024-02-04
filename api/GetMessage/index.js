module.exports = async function (context, req) {
  const date = "2024-02-04T19:07:43.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

