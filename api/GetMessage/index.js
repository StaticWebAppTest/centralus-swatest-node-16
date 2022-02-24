module.exports = async function (context, req) {
  const date = "2022-02-24T07:09:32.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

