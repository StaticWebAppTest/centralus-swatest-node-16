module.exports = async function (context, req) {
  const date = "2022-03-13T12:15:43.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

