module.exports = async function (context, req) {
  const date = "2024-05-27T21:10:18.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

