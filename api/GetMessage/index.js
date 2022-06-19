module.exports = async function (context, req) {
  const date = "2022-06-19T09:10:43.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

