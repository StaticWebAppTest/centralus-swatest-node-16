module.exports = async function (context, req) {
  const date = "2025-01-23T16:14:08.757Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

