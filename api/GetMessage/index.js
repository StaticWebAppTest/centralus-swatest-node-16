module.exports = async function (context, req) {
  const date = "2024-02-12T08:12:15.948Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

