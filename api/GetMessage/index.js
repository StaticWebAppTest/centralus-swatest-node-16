module.exports = async function (context, req) {
  const date = "2023-01-02T11:07:45.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

