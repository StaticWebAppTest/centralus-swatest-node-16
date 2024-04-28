module.exports = async function (context, req) {
  const date = "2024-04-28T06:11:51.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

