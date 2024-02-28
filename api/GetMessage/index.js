module.exports = async function (context, req) {
  const date = "2024-02-28T16:11:10.055Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

