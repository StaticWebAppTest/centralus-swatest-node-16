module.exports = async function (context, req) {
  const date = "2024-08-27T06:15:37.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

