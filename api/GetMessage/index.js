module.exports = async function (context, req) {
  const date = "2023-10-03T04:10:35.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

