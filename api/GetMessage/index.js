module.exports = async function (context, req) {
  const date = "2023-01-28T20:08:57.144Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

