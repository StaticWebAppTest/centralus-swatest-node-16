module.exports = async function (context, req) {
  const date = "2024-10-23T15:12:33.652Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

