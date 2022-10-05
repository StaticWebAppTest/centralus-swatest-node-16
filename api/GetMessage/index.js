module.exports = async function (context, req) {
  const date = "2022-10-05T15:14:27.438Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

