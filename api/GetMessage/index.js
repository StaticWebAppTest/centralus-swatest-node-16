module.exports = async function (context, req) {
  const date = "2023-10-06T04:10:35.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

