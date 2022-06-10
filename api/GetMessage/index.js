module.exports = async function (context, req) {
  const date = "2022-06-10T18:13:08.116Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

