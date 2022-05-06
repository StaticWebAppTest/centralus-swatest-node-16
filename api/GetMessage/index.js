module.exports = async function (context, req) {
  const date = "2022-05-06T12:20:04.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

