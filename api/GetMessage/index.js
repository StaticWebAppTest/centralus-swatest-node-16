module.exports = async function (context, req) {
  const date = "2022-10-28T16:15:10.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

