module.exports = async function (context, req) {
  const date = "2023-06-20T20:09:17.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

