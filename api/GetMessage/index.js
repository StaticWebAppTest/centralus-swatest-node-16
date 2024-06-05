module.exports = async function (context, req) {
  const date = "2024-06-05T15:10:09.129Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

