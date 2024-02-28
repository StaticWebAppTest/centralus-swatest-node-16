module.exports = async function (context, req) {
  const date = "2024-02-28T04:11:31.348Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

