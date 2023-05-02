module.exports = async function (context, req) {
  const date = "2023-05-02T20:09:14.348Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

