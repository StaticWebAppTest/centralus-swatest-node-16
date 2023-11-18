module.exports = async function (context, req) {
  const date = "2023-11-18T10:08:37.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

