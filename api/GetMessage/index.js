module.exports = async function (context, req) {
  const date = "2024-07-11T23:11:59.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

