module.exports = async function (context, req) {
  const date = "2023-05-24T22:07:54.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

