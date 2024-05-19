module.exports = async function (context, req) {
  const date = "2024-05-19T05:09:57.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

