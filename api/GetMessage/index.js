module.exports = async function (context, req) {
  const date = "2023-09-14T03:09:03.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

