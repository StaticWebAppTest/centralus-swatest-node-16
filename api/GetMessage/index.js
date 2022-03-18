module.exports = async function (context, req) {
  const date = "2022-03-18T09:10:27.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

