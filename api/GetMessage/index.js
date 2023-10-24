module.exports = async function (context, req) {
  const date = "2023-10-24T08:12:03.255Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

