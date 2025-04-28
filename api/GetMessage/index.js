module.exports = async function (context, req) {
  const date = "2025-04-28T23:12:13.757Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

