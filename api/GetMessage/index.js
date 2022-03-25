module.exports = async function (context, req) {
  const date = "2022-03-25T22:10:28.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

