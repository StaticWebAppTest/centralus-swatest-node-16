module.exports = async function (context, req) {
  const date = "2024-02-21T11:07:39.268Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

