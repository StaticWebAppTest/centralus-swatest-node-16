module.exports = async function (context, req) {
  const date = "2022-03-26T08:12:08.628Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

