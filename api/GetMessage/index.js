module.exports = async function (context, req) {
  const date = "2023-06-19T15:09:24.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

