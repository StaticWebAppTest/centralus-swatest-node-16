module.exports = async function (context, req) {
  const date = "2024-09-17T14:10:33.374Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

