module.exports = async function (context, req) {
  const date = "2022-10-06T13:48:02.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

