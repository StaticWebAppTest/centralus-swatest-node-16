module.exports = async function (context, req) {
  const date = "2022-04-25T11:09:35.434Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

