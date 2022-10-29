module.exports = async function (context, req) {
  const date = "2022-10-29T16:15:03.828Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

