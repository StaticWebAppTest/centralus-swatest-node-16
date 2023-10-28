module.exports = async function (context, req) {
  const date = "2023-10-28T20:08:12.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

