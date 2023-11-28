module.exports = async function (context, req) {
  const date = "2023-11-28T15:10:04.003Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

