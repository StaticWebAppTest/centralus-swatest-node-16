module.exports = async function (context, req) {
  const date = "2023-05-25T04:10:25.726Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

