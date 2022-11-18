module.exports = async function (context, req) {
  const date = "2022-11-18T11:09:06.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

