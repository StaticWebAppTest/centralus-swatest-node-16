module.exports = async function (context, req) {
  const date = "2022-07-23T10:11:22.438Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

