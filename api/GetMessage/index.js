module.exports = async function (context, req) {
  const date = "2022-03-12T14:08:30.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

