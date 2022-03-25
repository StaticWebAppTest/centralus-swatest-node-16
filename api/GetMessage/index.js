module.exports = async function (context, req) {
  const date = "2022-03-25T13:43:10.268Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

