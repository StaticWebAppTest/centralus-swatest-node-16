module.exports = async function (context, req) {
  const date = "2023-05-05T23:08:54.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

