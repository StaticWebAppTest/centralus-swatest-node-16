module.exports = async function (context, req) {
  const date = "2023-11-26T11:07:11.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

