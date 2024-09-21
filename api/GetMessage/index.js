module.exports = async function (context, req) {
  const date = "2024-09-21T20:11:13.767Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

