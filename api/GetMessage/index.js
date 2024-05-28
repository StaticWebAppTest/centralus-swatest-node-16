module.exports = async function (context, req) {
  const date = "2024-05-28T17:09:00.918Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

