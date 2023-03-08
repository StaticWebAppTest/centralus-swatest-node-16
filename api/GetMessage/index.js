module.exports = async function (context, req) {
  const date = "2023-03-08T09:11:02.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

