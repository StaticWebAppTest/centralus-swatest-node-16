module.exports = async function (context, req) {
  const date = "2023-12-14T04:11:30.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

