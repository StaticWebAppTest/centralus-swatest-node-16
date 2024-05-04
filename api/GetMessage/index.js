module.exports = async function (context, req) {
  const date = "2024-05-04T14:09:35.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

