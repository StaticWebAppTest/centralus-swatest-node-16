module.exports = async function (context, req) {
  const date = "2023-07-25T13:15:26.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

