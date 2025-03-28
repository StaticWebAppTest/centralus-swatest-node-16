module.exports = async function (context, req) {
  const date = "2025-03-28T05:12:54.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

