module.exports = async function (context, req) {
  const date = "2025-02-10T04:15:09.274Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

