module.exports = async function (context, req) {
  const date = "2023-08-03T20:08:46.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

