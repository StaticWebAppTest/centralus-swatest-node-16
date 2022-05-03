module.exports = async function (context, req) {
  const date = "2022-05-03T10:15:18.507Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

