module.exports = async function (context, req) {
  const date = "2022-11-07T11:10:04.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

