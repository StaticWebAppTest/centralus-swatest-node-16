module.exports = async function (context, req) {
  const date = "2022-10-26T09:12:02.579Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

