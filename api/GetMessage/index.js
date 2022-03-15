module.exports = async function (context, req) {
  const date = "2022-03-15T11:09:17.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

