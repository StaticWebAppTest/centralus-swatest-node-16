module.exports = async function (context, req) {
  const date = "2022-10-11T13:50:26.829Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

