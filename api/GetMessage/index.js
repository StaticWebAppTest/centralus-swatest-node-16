module.exports = async function (context, req) {
  const date = "2023-01-09T20:10:57.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

