module.exports = async function (context, req) {
  const date = "2023-02-10T20:11:02.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

