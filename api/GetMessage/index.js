module.exports = async function (context, req) {
  const date = "2022-10-15T16:17:18.597Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

