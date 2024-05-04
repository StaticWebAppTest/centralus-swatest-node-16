module.exports = async function (context, req) {
  const date = "2024-05-04T08:11:01.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

