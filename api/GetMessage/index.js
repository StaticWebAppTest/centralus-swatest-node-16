module.exports = async function (context, req) {
  const date = "2024-08-07T13:15:30.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

