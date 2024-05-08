module.exports = async function (context, req) {
  const date = "2024-05-08T09:10:01.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

