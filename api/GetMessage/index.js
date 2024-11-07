module.exports = async function (context, req) {
  const date = "2024-11-07T18:15:27.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

