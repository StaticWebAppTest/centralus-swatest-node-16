module.exports = async function (context, req) {
  const date = "2024-07-10T18:15:19.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

