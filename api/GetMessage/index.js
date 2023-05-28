module.exports = async function (context, req) {
  const date = "2023-05-28T15:08:08.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

