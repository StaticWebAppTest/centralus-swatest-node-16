module.exports = async function (context, req) {
  const date = "2024-09-04T15:11:46.268Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

