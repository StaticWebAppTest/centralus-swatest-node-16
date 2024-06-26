module.exports = async function (context, req) {
  const date = "2024-06-26T05:10:00.087Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

