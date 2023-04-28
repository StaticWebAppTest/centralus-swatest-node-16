module.exports = async function (context, req) {
  const date = "2023-04-28T06:11:56.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

