module.exports = async function (context, req) {
  const date = "2023-04-08T17:07:21.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

