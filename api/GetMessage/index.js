module.exports = async function (context, req) {
  const date = "2024-09-28T22:10:18.723Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

