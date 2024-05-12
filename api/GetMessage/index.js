module.exports = async function (context, req) {
  const date = "2024-05-12T08:12:06.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

