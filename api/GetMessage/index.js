module.exports = async function (context, req) {
  const date = "2024-08-22T15:13:08.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

