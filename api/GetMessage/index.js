module.exports = async function (context, req) {
  const date = "2023-04-14T00:45:10.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

