module.exports = async function (context, req) {
  const date = "2022-03-25T15:10:25.600Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

