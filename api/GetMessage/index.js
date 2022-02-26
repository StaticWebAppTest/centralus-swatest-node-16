module.exports = async function (context, req) {
  const date = "2022-02-26T11:08:08.359Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

