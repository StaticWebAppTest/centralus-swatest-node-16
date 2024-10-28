module.exports = async function (context, req) {
  const date = "2024-10-28T19:09:55.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

