module.exports = async function (context, req) {
  const date = "2022-05-28T15:11:27.726Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

