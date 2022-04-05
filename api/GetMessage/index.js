module.exports = async function (context, req) {
  const date = "2022-04-05T14:10:23.536Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

