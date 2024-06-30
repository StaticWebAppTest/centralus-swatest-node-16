module.exports = async function (context, req) {
  const date = "2024-06-30T19:08:09.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

