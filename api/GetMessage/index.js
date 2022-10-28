module.exports = async function (context, req) {
  const date = "2022-10-28T12:26:14.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

