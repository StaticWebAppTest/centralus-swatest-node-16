module.exports = async function (context, req) {
  const date = "2023-09-07T12:16:18.348Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

