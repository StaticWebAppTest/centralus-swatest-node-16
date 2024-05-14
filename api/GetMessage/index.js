module.exports = async function (context, req) {
  const date = "2024-05-14T09:11:02.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

