module.exports = async function (context, req) {
  const date = "2023-11-13T16:11:43.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

