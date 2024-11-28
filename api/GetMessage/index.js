module.exports = async function (context, req) {
  const date = "2024-11-28T04:15:15.066Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

