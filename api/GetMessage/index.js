module.exports = async function (context, req) {
  const date = "2022-12-25T20:09:02.645Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

