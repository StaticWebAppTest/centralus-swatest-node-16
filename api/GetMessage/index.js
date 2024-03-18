module.exports = async function (context, req) {
  const date = "2024-03-18T07:09:38.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

