module.exports = async function (context, req) {
  const date = "2022-04-19T15:11:24.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

