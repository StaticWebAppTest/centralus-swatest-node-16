module.exports = async function (context, req) {
  const date = "2023-06-13T16:11:30.430Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

