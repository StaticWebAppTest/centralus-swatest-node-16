module.exports = async function (context, req) {
  const date = "2024-10-09T14:11:19.778Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

