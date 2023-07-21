module.exports = async function (context, req) {
  const date = "2023-07-21T04:10:27.577Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

