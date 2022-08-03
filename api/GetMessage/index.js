module.exports = async function (context, req) {
  const date = "2022-08-03T11:09:54.536Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

