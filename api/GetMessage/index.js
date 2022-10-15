module.exports = async function (context, req) {
  const date = "2022-10-15T14:13:50.429Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

