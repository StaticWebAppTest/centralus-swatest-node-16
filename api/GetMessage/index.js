module.exports = async function (context, req) {
  const date = "2022-10-19T18:26:42.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

