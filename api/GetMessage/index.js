module.exports = async function (context, req) {
  const date = "2024-07-19T11:09:19.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

