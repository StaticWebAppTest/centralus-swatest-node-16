module.exports = async function (context, req) {
  const date = "2023-08-15T20:08:57.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

