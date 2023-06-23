module.exports = async function (context, req) {
  const date = "2023-06-23T10:11:10.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

