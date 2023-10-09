module.exports = async function (context, req) {
  const date = "2023-10-09T17:08:00.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

