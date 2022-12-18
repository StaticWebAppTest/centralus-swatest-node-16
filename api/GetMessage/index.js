module.exports = async function (context, req) {
  const date = "2022-12-18T20:09:02.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

