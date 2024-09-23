module.exports = async function (context, req) {
  const date = "2024-09-23T17:10:39.586Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

