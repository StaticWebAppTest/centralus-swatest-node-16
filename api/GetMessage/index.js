module.exports = async function (context, req) {
  const date = "2024-09-05T11:10:09.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

