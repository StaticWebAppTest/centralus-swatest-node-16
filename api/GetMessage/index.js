module.exports = async function (context, req) {
  const date = "2022-06-24T07:10:08.429Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

