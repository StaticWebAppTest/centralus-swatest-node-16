module.exports = async function (context, req) {
  const date = "2024-03-09T14:09:18.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

