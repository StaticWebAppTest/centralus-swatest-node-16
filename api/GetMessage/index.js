module.exports = async function (context, req) {
  const date = "2024-06-04T11:09:37.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

