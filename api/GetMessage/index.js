module.exports = async function (context, req) {
  const date = "2024-03-27T15:10:27.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

