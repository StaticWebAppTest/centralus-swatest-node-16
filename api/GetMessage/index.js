module.exports = async function (context, req) {
  const date = "2022-02-26T04:12:03.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

