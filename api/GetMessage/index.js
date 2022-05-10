module.exports = async function (context, req) {
  const date = "2022-05-10T11:10:35.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

