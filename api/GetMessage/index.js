module.exports = async function (context, req) {
  const date = "2022-10-13T10:15:06.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

