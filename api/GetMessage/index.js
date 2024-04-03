module.exports = async function (context, req) {
  const date = "2024-04-03T05:09:18.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

