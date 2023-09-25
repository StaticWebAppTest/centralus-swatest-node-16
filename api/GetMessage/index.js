module.exports = async function (context, req) {
  const date = "2023-09-25T22:08:15.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

