module.exports = async function (context, req) {
  const date = "2022-06-10T09:10:17.460Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

