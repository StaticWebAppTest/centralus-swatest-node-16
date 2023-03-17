module.exports = async function (context, req) {
  const date = "2023-03-17T11:08:24.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

