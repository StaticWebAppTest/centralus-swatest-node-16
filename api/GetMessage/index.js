module.exports = async function (context, req) {
  const date = "2023-12-31T15:08:09.215Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

