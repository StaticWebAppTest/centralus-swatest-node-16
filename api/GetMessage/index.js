module.exports = async function (context, req) {
  const date = "2024-02-17T08:10:33.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

