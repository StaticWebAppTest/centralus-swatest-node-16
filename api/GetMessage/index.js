module.exports = async function (context, req) {
  const date = "2022-07-25T06:15:01.475Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

