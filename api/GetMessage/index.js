module.exports = async function (context, req) {
  const date = "2024-02-28T14:07:51.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

