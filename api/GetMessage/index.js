module.exports = async function (context, req) {
  const date = "2023-03-12T16:11:27.127Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

