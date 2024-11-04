module.exports = async function (context, req) {
  const date = "2024-11-04T14:11:39.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

