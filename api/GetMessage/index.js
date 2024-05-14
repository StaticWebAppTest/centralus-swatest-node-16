module.exports = async function (context, req) {
  const date = "2024-05-14T15:11:39.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

