module.exports = async function (context, req) {
  const date = "2024-11-30T05:11:30.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

