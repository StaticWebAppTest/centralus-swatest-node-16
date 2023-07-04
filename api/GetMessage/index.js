module.exports = async function (context, req) {
  const date = "2023-07-04T15:10:16.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

