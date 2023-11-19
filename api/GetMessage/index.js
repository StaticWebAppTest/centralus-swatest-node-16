module.exports = async function (context, req) {
  const date = "2023-11-19T16:10:35.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

