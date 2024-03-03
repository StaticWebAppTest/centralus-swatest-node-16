module.exports = async function (context, req) {
  const date = "2024-03-03T14:08:12.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

