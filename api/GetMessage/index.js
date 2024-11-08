module.exports = async function (context, req) {
  const date = "2024-11-08T14:10:50.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

