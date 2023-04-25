module.exports = async function (context, req) {
  const date = "2023-04-25T09:09:10.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

