module.exports = async function (context, req) {
  const date = "2023-06-14T14:08:01.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

