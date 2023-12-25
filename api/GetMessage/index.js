module.exports = async function (context, req) {
  const date = "2023-12-25T04:11:43.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

