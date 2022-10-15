module.exports = async function (context, req) {
  const date = "2022-10-15T15:13:05.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

