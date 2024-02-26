module.exports = async function (context, req) {
  const date = "2024-02-26T04:11:08.268Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

