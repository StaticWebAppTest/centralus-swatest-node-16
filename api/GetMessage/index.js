module.exports = async function (context, req) {
  const date = "2023-11-20T20:09:47.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

