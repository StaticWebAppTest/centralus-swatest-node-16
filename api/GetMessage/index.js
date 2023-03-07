module.exports = async function (context, req) {
  const date = "2023-03-07T04:12:26.876Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

