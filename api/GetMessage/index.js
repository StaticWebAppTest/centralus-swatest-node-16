module.exports = async function (context, req) {
  const date = "2023-08-05T20:08:09.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

