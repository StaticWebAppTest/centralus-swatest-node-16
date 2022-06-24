module.exports = async function (context, req) {
  const date = "2022-06-24T05:16:36.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

