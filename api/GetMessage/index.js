module.exports = async function (context, req) {
  const date = "2023-07-28T21:07:18.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

