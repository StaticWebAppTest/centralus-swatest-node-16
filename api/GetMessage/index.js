module.exports = async function (context, req) {
  const date = "2023-02-10T08:12:49.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

