module.exports = async function (context, req) {
  const date = "2022-05-20T14:10:18.438Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

