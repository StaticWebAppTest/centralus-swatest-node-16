module.exports = async function (context, req) {
  const date = "2024-09-10T15:11:37.348Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

