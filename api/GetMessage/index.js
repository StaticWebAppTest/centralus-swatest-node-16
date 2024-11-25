module.exports = async function (context, req) {
  const date = "2024-11-25T13:22:32.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

