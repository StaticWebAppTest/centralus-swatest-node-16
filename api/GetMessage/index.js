module.exports = async function (context, req) {
  const date = "2022-03-18T11:08:30.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

