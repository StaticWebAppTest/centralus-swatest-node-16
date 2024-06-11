module.exports = async function (context, req) {
  const date = "2024-06-11T16:13:01.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

