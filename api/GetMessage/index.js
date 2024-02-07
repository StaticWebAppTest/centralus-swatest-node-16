module.exports = async function (context, req) {
  const date = "2024-02-07T16:12:35.270Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

