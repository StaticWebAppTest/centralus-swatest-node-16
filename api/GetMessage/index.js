module.exports = async function (context, req) {
  const date = "2023-09-30T16:09:52.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

