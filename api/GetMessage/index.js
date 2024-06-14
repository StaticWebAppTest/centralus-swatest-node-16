module.exports = async function (context, req) {
  const date = "2024-06-14T15:10:57.652Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

