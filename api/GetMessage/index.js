module.exports = async function (context, req) {
  const date = "2024-03-07T23:10:35.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

