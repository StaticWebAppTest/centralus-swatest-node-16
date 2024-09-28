module.exports = async function (context, req) {
  const date = "2024-09-28T07:10:00.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

