module.exports = async function (context, req) {
  const date = "2024-11-28T09:13:27.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

