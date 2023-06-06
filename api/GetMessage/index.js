module.exports = async function (context, req) {
  const date = "2023-06-06T06:11:27.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

