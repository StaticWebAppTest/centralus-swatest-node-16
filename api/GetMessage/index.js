module.exports = async function (context, req) {
  const date = "2023-12-21T15:09:12.348Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

