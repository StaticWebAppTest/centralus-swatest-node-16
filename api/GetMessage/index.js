module.exports = async function (context, req) {
  const date = "2023-01-11T05:09:18.931Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

