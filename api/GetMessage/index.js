module.exports = async function (context, req) {
  const date = "2023-10-24T16:11:44.714Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

