module.exports = async function (context, req) {
  const date = "2023-07-14T13:18:02.421Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

