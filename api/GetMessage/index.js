module.exports = async function (context, req) {
  const date = "2022-12-27T00:49:00.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

