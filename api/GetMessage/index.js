module.exports = async function (context, req) {
  const date = "2023-10-21T15:07:48.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

