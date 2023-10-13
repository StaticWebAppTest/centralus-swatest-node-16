module.exports = async function (context, req) {
  const date = "2023-10-13T20:09:48.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

