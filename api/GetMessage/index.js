module.exports = async function (context, req) {
  const date = "2022-09-17T11:10:10.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

