module.exports = async function (context, req) {
  const date = "2024-05-18T08:11:12.350Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

