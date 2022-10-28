module.exports = async function (context, req) {
  const date = "2022-10-28T13:44:57.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

