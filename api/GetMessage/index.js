module.exports = async function (context, req) {
  const date = "2024-03-03T15:07:50.918Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

