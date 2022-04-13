module.exports = async function (context, req) {
  const date = "2022-04-13T17:15:20.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

