module.exports = async function (context, req) {
  const date = "2023-10-29T18:10:25.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

