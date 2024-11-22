module.exports = async function (context, req) {
  const date = "2024-11-22T15:12:25.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

