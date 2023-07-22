module.exports = async function (context, req) {
  const date = "2023-07-22T14:07:11.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

