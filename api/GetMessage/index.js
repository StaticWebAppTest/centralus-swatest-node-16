module.exports = async function (context, req) {
  const date = "2024-06-30T08:12:13.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

