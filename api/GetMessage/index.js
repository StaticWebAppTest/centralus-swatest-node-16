module.exports = async function (context, req) {
  const date = "2023-11-28T19:07:33.127Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

