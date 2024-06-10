module.exports = async function (context, req) {
  const date = "2024-06-10T04:14:24.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

