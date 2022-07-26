module.exports = async function (context, req) {
  const date = "2022-07-26T18:13:45.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

