module.exports = async function (context, req) {
  const date = "2023-06-30T14:08:18.080Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

