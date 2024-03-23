module.exports = async function (context, req) {
  const date = "2024-03-23T02:15:15.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

