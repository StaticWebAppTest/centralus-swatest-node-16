module.exports = async function (context, req) {
  const date = "2025-05-11T20:13:09.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

