module.exports = async function (context, req) {
  const date = "2024-12-26T20:12:14.757Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

