module.exports = async function (context, req) {
  const date = "2023-10-09T22:08:08.078Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

