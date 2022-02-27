module.exports = async function (context, req) {
  const date = "2022-02-27T14:09:23.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

