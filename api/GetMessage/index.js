module.exports = async function (context, req) {
  const date = "2023-07-17T13:20:50.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

