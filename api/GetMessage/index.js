module.exports = async function (context, req) {
  const date = "2024-06-28T16:12:12.245Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

