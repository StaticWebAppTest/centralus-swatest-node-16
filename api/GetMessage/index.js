module.exports = async function (context, req) {
  const date = "2024-02-28T20:09:52.710Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

