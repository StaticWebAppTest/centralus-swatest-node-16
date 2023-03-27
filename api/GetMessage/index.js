module.exports = async function (context, req) {
  const date = "2023-03-27T16:12:35.144Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

