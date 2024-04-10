module.exports = async function (context, req) {
  const date = "2024-04-10T08:13:12.348Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

