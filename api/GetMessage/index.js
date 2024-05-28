module.exports = async function (context, req) {
  const date = "2024-05-28T04:14:12.586Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

