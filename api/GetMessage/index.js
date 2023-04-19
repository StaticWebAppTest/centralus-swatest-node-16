module.exports = async function (context, req) {
  const date = "2023-04-19T08:12:03.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

